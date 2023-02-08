declare module 'react-blockies' {
    import { type FC } from 'react'
    interface BlockiesProps {
        seed: string
        size?: number
        scale?: number
        color?: string
        bgColor?: string
        spotColor?: string
        className?: string
    }
    const Blockies: FC<BlockiesProps>

    export default Blockies
}