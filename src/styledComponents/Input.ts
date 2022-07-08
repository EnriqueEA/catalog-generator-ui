import tw from "tailwind-styled-components";

interface InputProps {
   $primary: boolean
}

export const Input = tw.input<InputProps>`
   rounded-[5px] border border-gray-300 outline-none focus:border-black py-3 px-4
   ${(p: any)=> p.$primary ? '': ''}
`;