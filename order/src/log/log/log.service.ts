import { Injectable, OnModuleInit, Logger, HttpException } from '@nestjs/common';
import { Client, ClientKafka, Transport, MessagePattern, Payload } from '@nestjs/microservices';
import { Message } from '@nestjs/microservices/external/kafka-options.interface';
import { LogDto } from '../log.dto';

@Injectable()
export class LogService implements OnModuleInit {
    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId: 'order',
                brokers: ['localhost:9092'],
                retry: {
                    initialRetryTime: 100,
                    retries: 10,
                },
            },
        },
    })
    client: ClientKafka;

    onModuleInit() {
        this.client.subscribeToResponseOf('create-log');
    }

    async create(log: LogDto) {
        this.client
        .send<Message>('create-log', log)
        .subscribe(response => {
            Logger.log(response);
        }, (err) => {
            Logger.error(err);
        });
    }
}
