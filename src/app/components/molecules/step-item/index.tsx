import Image from "next/image";

interface StepItemProps {
    icon: 'step-1' | 'step-2' | 'step-3';
    title: String;
    desc1: String;
    desc2: String;
}

export default function StepItem(props: StepItemProps) {
    const { icon, title, desc1, desc2 } = props;

    return (
        <div className="col-lg-4">
            <div className="card feature-card border-0">
                <Image src={`/icon/${icon}.svg`} width={80} height={80} alt="icon" />
                <p className="fw-semibold text-2xl mb-2 color-palette-1">1. Start</p>
                <p className="text-lg color-palette-1 mb-0">Pilih salah satu game<br/>
                    yang ingin kamu top up</p>
            </div>
        </div>
    )
};
