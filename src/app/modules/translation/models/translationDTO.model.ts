export class TranslationRequestDto {
    translator!: string;
    toTranslation!: string;
}

export class TranslationResponseDto {
    id!: number;
    translator!: string;
    toTranslator!: string;
    translation!: string;
    toTranslation!: string;
}