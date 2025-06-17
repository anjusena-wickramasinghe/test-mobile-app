export const COLORS={
    darkGray:'darkgray',
    red:'green',
    blue:'blue',
    light:'#fff',
    green:'#B6F500',
    Lgreen:'#075B5E',
    orange:'#FF7601',

}as const;

export type colorTypes = keyof typeof COLORS;