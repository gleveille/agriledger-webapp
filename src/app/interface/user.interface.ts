export interface Iuser {
    profiles?: {
        id?:string,
        phone?: string,
        passcode?: number,
        name?: string,
        registration?:String,
        company?:string,
        address?:{
            line1:string,
            line2:string,
            city:string,
            province:string
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
