export interface Constructor {
    id: number;
    name: string;
    variant: string;
    kind: number;
    flags: Flags;
    sources?: (SourcesEntity)[] | null;
    signatures?: (SignaturesEntity)[] | null;
    overwrites: Overwrites;
}


export interface ConstructorParam {
    name: string;
    type: any;
    description: string;
    href: string;
}

export interface Param {
    name: string;
}

export interface Property {
    name: string;
    href: string;
    description: string;
    types: string[];
}

export interface Method {
    name: string;
    href: string;
    description: string;
    parameters: any[];
}

export interface Child {
    type: {
        types: {
            type: string;
            name: string;
            target: number;
            elementType: {
                target: number;
            }
        }[];
        type: string;
    };
    signatures: SignaturesEntity[];
    sources: {
        url: string;
    }[],
    kind: number;
    comment: Comment;
    name: string;
}

export interface SymbolMap {
    sourceFileName: string;
}

interface Flags {
}

interface SourcesEntity {
    fileName: string;
    line: number;
    character: number;
    url: string;
}

export interface SignaturesEntity {
    id: number;
    name: string;
    variant: string;
    kind: number;
    flags: Flags;
    comment: Comment;
    sources?: (SourcesEntity)[] | null;
    parameters?: (ParametersEntity)[] | null;
    type: Type;
    overwrites: Overwrites;
}

interface Comment {
    summary?: (SummaryEntity)[] | null;
}

interface SummaryEntity {
    kind: string;
    text: string;
}

export interface ParametersEntity {
    id: number;
    name: string;
    variant: string;
    kind: number;
    flags: Flags;
    comment: Comment;
    type: Type;
}

interface Type {
    elementType: {
        target: number;
        type: string;
    };
    value: string;
    operator?: string;
    type: string;
    target: number | {
        target: number;
    };
    name: string;
    package: string;
}

interface Overwrites {
    type: string;
    target: number;
    name: string;
}