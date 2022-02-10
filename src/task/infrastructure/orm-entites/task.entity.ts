import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class TaskEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}