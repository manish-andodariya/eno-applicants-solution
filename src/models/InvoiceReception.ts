export interface ReceptionInvoice {
    invoiceNumber: string;
    buyerId: number;
    contact: string;
    invoiceDate: Date;
    dueDate: Date;
    address: string;
    bank: number;
    ledger: number;
    account: number;
    kennitala: string;
    comments: string;
}
