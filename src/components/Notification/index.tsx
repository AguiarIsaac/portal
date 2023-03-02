import { X } from "phosphor-react";
import { useState } from 'react'
import { NotificationContainer } from "./styles";

export function Notification(props: any) {
  const [closeButton, setCloseButton] = useState('') 


  function handleClose() {
    setCloseButton('close')
  }

  return (
    <NotificationContainer className={closeButton}>
      <span>{props.message}</span>
      <button type="button" onClick={handleClose}>
        <X size={18} />
      </button>
    </NotificationContainer>
  )
}