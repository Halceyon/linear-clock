export interface NotificationMessage {
  description: any;
  action: any;
  message: string;
  type: string;
  duration: number;
  position: string;
  icon: string;
  showClose: boolean;
  onClose: () => void;
}


