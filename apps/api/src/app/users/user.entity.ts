import { Exclude, Transform } from 'class-transformer';
import { Role, roles } from '../common/enums/role.enum';
import { toLocaleTime } from '../common/helpers/timezone.helper';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: '' })
  fullname: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 'user' })
  roles: string;

  @Transform(toLocaleTime)
  @CreateDateColumn()
  createdAt: Date;

  @Transform(toLocaleTime)
  @UpdateDateColumn()
  updatedAt: Date;
}
