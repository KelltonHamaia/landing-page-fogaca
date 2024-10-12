export const HeroSection = () => {
    return (
        <div className="w-1/3 h-[430px] bg-[#07172E]/60 rounded-r-[40px] mt-32 p-11 flex flex-col gap-5 text-white">

            <h2 className="bg-orange-400 w-80 border-2 border-orange-800 text-lg flex items-center justify-center gap-3 font-bold rounded-lg">
                <div className="size-3 bg-orange-800 rotate-45"></div>
                Play with your friends online
                <div className="size-3 bg-orange-800 rotate-45"></div>
            </h2>

            <h1 className="font-serif font-bold">
                <span className="text-5xl tracking-tight">Welcome To</span>
                <br />
                <span className="text-4xl tracking-tight">Logic Journey</span>
            </h1>

            <p className="text-lg leading-8">
                É um jogo interativo que facilita o aprendizado de programação.
                Através de desafios divertidos, os jogadores desenvolvem habilidades de lógica e codificação,
                explorando conceitos fundamentais de maneira envolvente e educativa.
            </p>
        </div>
    );
};