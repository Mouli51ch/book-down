export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  price: number;
  imageUrl?: string;
  category: string;
  capacity: number;
  organizer: string;
}

export interface Ticket {
  id: string;
  eventId: string;
  owner: string;
  quantity: number;
  purchaseDate: string;
  transactionHash: string;
  nftTokenId: string;
}

export interface WalletState {
  connected: boolean;
  address: string | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}
