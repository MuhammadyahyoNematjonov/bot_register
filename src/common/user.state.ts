type userState = 'Familya'| 'ism'| "yosh" |"nomer"

interface userdata{
    step:userState,
    data:{
        Familya?:string
        ism?:string
        yosh?:number
        nomer?:number
    }
}

export const UserState = new Map<number,userdata>()