import { PayloadUser } from "@/types/user"

export class NumberUtils {
    // mask para trazer um numero com pontuacao de numros inteiros ex: 500.000
    static maskNumberInt = (value: any): string => {
        if (!value) return ''
        if (value === '') return ''
        if (value === null) return ''

        return value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
}


