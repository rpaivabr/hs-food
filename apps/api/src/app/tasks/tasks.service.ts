import { Injectable, Logger } from '@nestjs/common';
// import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
// import { CronJob } from 'cron';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  // constructor(private schedulerRegistry: SchedulerRegistry) {}

  // @Cron('45 * * * * *')
  // handleCron() {
  //   this.logger.debug('Called when the second is 45');
  //   this.addCronJob('teste', '10');
  // }

  // @Cron(CronExpression.EVERY_30_SECONDS)
  // handleCronExp() {
  //   this.logger.debug('Called every 30 seconds');
  // }

  // @Interval(10000)
  // handleInterval() {
  //   this.logger.debug('Called every 10 seconds');
  // }

  // @Timeout(5000)
  // handleTimeout() {
  //   this.logger.debug('Called once after 5 seconds');
  // }

  // addCronJob(name: string, seconds: string) {
  //   const job = new CronJob(`${seconds} * * * * *`, () => {
  //     this.logger.warn(`time (${seconds}) for job ${name} to run!`);
  //   });

  //   this.schedulerRegistry.addCronJob(name, job);
  //   job.start();

  //   this.logger.warn(
  //     `job ${name} added for each minute at ${seconds} seconds!`,
  //   );
  // }
}
