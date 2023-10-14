import Image from 'next/image';

interface DurationProps {
    message: string;
}

const EmptyDataBlock: React.FC<DurationProps> = ({ message }) => {

        return (
            <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <div style={{ maxWidth: '100%', maxHeight: '50vh' }}>
                    <Image
                        src="/empty.png"
                        alt="Empty results placeholder"
                        layout="responsive"
                        width={400}
                        height={300}
                        priority
                    />
                </div>
                <span style={{ marginTop: '2rem' }}>{message}</span>
            </div>
        );
    };

    export default EmptyDataBlock;
