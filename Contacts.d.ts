interface Navigator {
    service: Service
}

interface Service {
}

interface ServiceContacts extends Service {
    contacts: Contacts;
}

interface Contacts {
    create(properties: ContactProperties): Contact;
    find(filter: ContactProperties,
        onSuccess: (contacts: Contact[]) => void,
        onError?: (error: ContactError) => void,
        options?: ContactFindOptions): PendingOp;
}

interface ContactProperties {
    name?: string;
    nicknames: string[];
    phones: ContactField[];
    emails: ContactField[];
    addresses: ContactAddress[];
    impps: ContactField[];
    serviceId?: string;
    categories: string[]
};

interface Contact extends ContactProperties {
    id: string;
    clone(): Contact;
    remove(onSuccess: (contact: Contact) => void,
        onError?: (error: ContactError) => void): PendingOp;
    save(onSuccess: (contact: Contact) => void,
        onError?: (error: ContactError) => void): PendingOp;
}

interface ContactError extends GenericError {
};

declare var ContactError: {
    CONTACT_NOT_FOUND_ERROR: number;
    CONTACT_INVALID_ERROR: number;
}

interface GenericError {
    code: number;
};

declare var GenericError: {
    UNKNOWN_ERR: number;
    INVALID_ARGUMENT_ERROR: number;
    NOT_FOUND_ERROR: number;
    PENDING_OPERATION_ERROR: number;
    IO_ERROR: number;
    NOT_SUPPORTED_ERROR: number;
    PERMISSION_DENIED_ERROR: number
}

interface ContactField {
    types: string[];
    value: string;
};

interface ContactAddress {
    premises: string;
    streetNumber: string;
    street: string;
    city: string;
    county: string;
    region: string;
    postalCode: string;
    country: string;
    additionalInformation: string;
};

interface ContactFindOptions {
    limit: number;
    page: number;
    sort?: string;
    group?: boolean;
};

interface PendingOp {
    cancel(): void;
};
