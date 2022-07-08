import tw from 'tailwind-styled-components';

interface ButtonProps {
   $primary: boolean
}

export const Button = tw.button<ButtonProps>`
   rounded-md py-3 px-10
   ${ (p: any) => p.$primary && 'bg-blue-700 text-white' }
`;