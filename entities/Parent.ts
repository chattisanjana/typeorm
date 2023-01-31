import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChildOne } from "./ChildOne";

@Entity("parent")
export class Parent {
  @PrimaryGeneratedColumn({ type: "int", name: "parent_id" })
  parentId: number;

  @Column("varchar", { name: "p_name", nullable: true, length: 50 })
  pName: string | null;

  @OneToMany(() => ChildOne, (childOne) => childOne.parent)
  childOnes: ChildOne[];
}
