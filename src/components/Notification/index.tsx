import { NotificationContainer } from "./styles";

export function Notification(props: any) {
  return (
    <NotificationContainer>
      <h1>{props.message}</h1>
    </NotificationContainer>
  )
}