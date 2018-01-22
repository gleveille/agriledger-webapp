export interface Iuser {
    profiles?: {
        id?:string,
        userId?:string,
        verificationStatus?:string,
        phone?: string,
        passcode?: number,
        name?: string,
        registration?:String,
        company?:string,
        farmDetails?: {
            farmName?:string,
            products?:string,
            crops?: string,
            grade?: string,
            size?: string,
            region?: string,
        },
        address?:{
            line1?:string,
            line2?:string,
            city?:string,
            province?:string,
            country?:string,
            district?:string
        }
        profileUrl?: {
            url: string,
            lat: number,
            long: number,
            hash:string
        },
    },
    id?:string,
    username?:string,
    lastLoggedIn?:string,
    email?:string,
    role?:string,
    issuerName?:string,
    password?:string,
    walletAddress?:string,
    publicKey?:string,
    isPasswordChanged?:boolean,
    isRegisteredOnBlockchain?:boolean,
    isIssuerOnBlockchain?:boolean

}
