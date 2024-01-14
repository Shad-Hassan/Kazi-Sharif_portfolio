

const LoadingModal = () => {
    return (
        <>
            <div role="status" className="space-y-2.5 animate-pulse w-full px-3">
                <div className="flex flex-col gap-[1.5rem] items-center justify-center w-full">
                    <div className="h-8 bg-ghost-blue rounded-full w-full gap-[5svh]"></div>
                    <div className="h-8 ms-2 bg-ghost-blue rounded-full w-full"></div>
                    <div className="h-8 ms-2 bg-ghost-blue rounded-s-full w-full"></div>
                </div>

                <div className="flex flex-col gap-[1.5rem] items-center justify-center w-full">
                    <div className="h-8 bg-ghost-blue rounded-full w-full gap-[5svh]"></div>
                    <div className="h-8 ms-2 bg-ghost-blue rounded-full w-full"></div>
                    <div className="h-8 ms-2 bg-ghost-blue rounded-s-full w-full"></div>
                </div>

                <div className="flex flex-col gap-[1.5rem] items-center justify-center w-full">
                    <div className="h-8 bg-ghost-blue rounded-full w-full gap-[5svh]"></div>
                    <div className="h-8 ms-2 bg-ghost-blue rounded-full w-full"></div>
                    <div className="h-8 ms-2 bg-ghost-blue rounded-s-full w-full"></div>
                </div>
            </div>
        </>
    );
};

export default LoadingModal;