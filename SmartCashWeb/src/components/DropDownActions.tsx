'use client'

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";
import { MouseEventHandler } from 'react'

interface DropDownActionsProps{
  onDelete: MouseEventHandler,
  onEdit: MouseEventHandler
}
export default function DropDownActions({ onDelete, onEdit }: DropDownActionsProps) {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
        >
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="edit"
          onClick={onEdit}
          startContent={<Pencil size={18} className={iconClasses} />}
        >
          editar
        </DropdownItem>

        <DropdownItem
          key="delete"
          onClick={onDelete}
          className="text-danger"
          color="danger"
          startContent={<Trash className={cn(iconClasses, "text-danger")} />}
        >
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
