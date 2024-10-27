/* eslint-disable @typescript-eslint/no-unused-vars */
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { Role } from 'src/user/types/userRole.type';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamService } from './team.service';
import { trackClientHellos } from 'read-tls-client-hello';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async findAll(req: Request) {
    const https = require('https');

    const server = new https.Server();
    trackClientHellos(server);

    server.on('request', (request, response) => {
      // In your normal request handler, check `tlsClientHello` on the request's socket:
      console.log(
        'Received request with TLS client hello:',
        request.socket?.tlsClientHello,
      );
    });
    console.log(server);
    return 'Allow!!';
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.teamService.findOne(id);
  }

  @Roles(Role.Admin)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file: string) {
    await this.teamService.create(file);
  }

  @Roles(Role.Admin)
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTeamDto: UpdateTeamDto) {
    await this.teamService.update(id, updateTeamDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.teamService.delete(id);
  }
}
