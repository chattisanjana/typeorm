import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Parent } from "./Parent";

@Index("fk", ["parentId"], {})
@Entity("child_one", { schema: "dev" })
export class ChildOne {
  @PrimaryGeneratedColumn({ type: "int", name: "child_id" })
  childId: number;

  @Column("varchar", { name: "c_name", nullable: true, length: 50 })
  cName: string | null;

  @Column("int", { name: "parent_id" })
  parentId: number;

  @ManyToOne(() => Parent, (parent) => parent.childOnes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "parent_id", referencedColumnName: "parentId" }])
  parent: Parent;
}
