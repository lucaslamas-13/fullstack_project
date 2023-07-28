import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Contact from "./contact.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 11 })
  phoneNumber: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashpassword() {
    const isEncrypted: number = getRounds(this.password);

    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;
