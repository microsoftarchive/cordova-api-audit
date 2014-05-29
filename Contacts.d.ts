interface Navigator {
    contacts: Contacts;
}

interface Contacts {
    create(properties?: ContactProperties): Contact;
    find(fields: string[],
        onSuccess: (contacts: Contact[]) => void,
        onError: (error: ContactError) => void,
        options?: ContactFindOptions): void;
}

interface ContactProperties {
    id?: string;
    displayName?: string;
    name?: ContactName;
    nickname?: string;
    phoneNumbers?: ContactField[];
    emails?: ContactField[];
    addresses?: ContactAddress[];
    ims?: ContactField[];
    organizations?: ContactOrganization[];
    birthday?: Date;
    note?: string;
    photos?: ContactField[];
    categories?: ContactField[];
    urls?: ContactField[];
}

interface Contact extends ContactProperties {
    clone(): Contact;
    remove(onSuccess: () => void,
        onError: (error: Error) => void): void;
    save(onSuccess: (contact: Contact) => void,
        onError: (error: Error) => void): void;
}

declare var Contact: {
    new(id?: string,
        displayName?: string,
        name?: ContactName,
        nickname?: string,
        phoneNumbers?: ContactField[],
        emails?: ContactField[],
        addresses?: ContactAddress[],
        ims?: ContactField[],
        organizations?: ContactOrganization[],
        birthday?: Date,
        note?: string,
        photos?: ContactField[],
        categories?: ContactField,
        urls?: ContactField[]): Contact
};

interface ContactError {
    code: number;
    message: string;
}

declare var ContactError: {
    new(code: number): ContactError;
    UNKNOWN_ERROR: number;
    INVALID_ARGUMENT_ERROR: number;
    TIMEOUT_ERROR: number;
    PENDING_OPERATION_ERROR: number;
    IO_ERROR: number;
    NOT_SUPPORTED_ERROR: number;
    PERMISSION_DENIED_ERROR: number
};

interface ContactName {
    formatted?: string;
    familyName?: string;
    givenName?: string;
    middleName?: string;
    honorificPrefix?: string;
    honorificSuffix?: string;
}

declare var ContactName: {
    new(formatted?: string,
        familyName?: string,
        givenName?: string,
        middleName?: string,
        honorificPrefix?: string,
        honorificSuffix?: string): ContactName
};

interface ContactField {
    type: string;
    value: string;
    pref: boolean;
}

declare var ContactField: {
    new(type?: string,
        value?: string,
        pref?: boolean): ContactField
};

interface ContactAddress {
    pref?: boolean;
    type?: string;
    formatted?: string;
    streetAddress?: string;
    locality?: string;
    region?: string;
    postalCode?: string;
    country?: string;
}

declare var ContactAddress: {
    new(pref?: boolean,
        type?: string,
        formatted?: string,
        streetAddress?: string,
        locality?: string,
        region?: string,
        postalCode?: string,
        country?: string): ContactAddress
};

interface ContactOrganization {
    pref?: boolean;
    type?: string;
    name?: string;
    department?: string;
    title?: string;
}

declare var ContactOrganization: {
    new(pref?: boolean,
        type?: string,
        name?: string,
        department?: string,
        title?: string): ContactOrganization
};

interface ContactFindOptions {
    filter?: string;
    multiple?: boolean;
}

declare var ContactFindOptions: {
    new(filter?: string,
        multiple?: boolean): ContactFindOptions
};