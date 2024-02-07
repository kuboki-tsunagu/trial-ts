import { ImgHTMLAttributes } from 'react'

const ApplicationLogo = (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <img src="/img/musicstage.png" alt="ApplicationLogo" {...props} />
);

export default ApplicationLogo
