import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    name: string;

    @Column({
        nullable: false,
        default: '',
    })
    email: string;

    @Column({
        nullable: false,
        default: '',
    })
    message: string;
}