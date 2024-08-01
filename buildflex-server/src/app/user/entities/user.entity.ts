import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Workspace } from '@app/workspace/entities/workspace.entity';
import { Organization } from '@app/organization/entities/organization.entity';
import { UserOrganization } from '@app/organization/entities/user-organization.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string; // 'admin' or 'member'

  @OneToMany(() => Workspace, (workspace) => workspace.user)
  workspaces: Workspace[];

  @OneToMany(() => Organization, (organization) => organization.user)
  organizations: Organization[];

  @OneToMany(
    () => UserOrganization,
    (userOrganization) => userOrganization.user,
  )
  userOrganizations: UserOrganization[];
}
