import { SpinnerInfinity } from 'spinners-react';
export default function Loader({ boolean }) {
    return (
        boolean ? <div className="spinner"> < SpinnerInfinity enabled={true} size={150} /></div > : <SpinnerInfinity enabled={false} />

    )

}