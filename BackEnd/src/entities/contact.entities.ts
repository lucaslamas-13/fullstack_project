import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entities";

@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 45})
    name: string

    @Column({ type: "varchar", length: 45, unique: true})
    email: string

    @Column({ type: "varchar", length: 11 })
    phoneNumber: string;

    @CreateDateColumn({ type: "date" })
    createdAt: Date | string;

    @ManyToOne(() => User, (user) => user.contacts)
    user: User
}

export default Contact