export function FounderSection() {
    return (
      <section id="founder" className="w-full bg-[#FDF8F5] py-16 sm:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ll-purple mb-4 sm:mb-6 font-fredoka">
              Dad Built. Kid Tested. Mom Approved.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Kellie is a mom of three, certified Pilates instructor, former salon manager, and enterprise sales leader. She started Little Legends after seeing there were no clean, fun, safe hair products made for boys like her son.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Now it’s a family thing—five of them building a brand for confident kids, bold style, and everyday fun.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img src="/images/cleanlogo.png" alt="Little Legends" className="w-56 sm:w-72 md:w-80 h-auto drop-shadow-sm" />
          </div>
        </div>
      </section>
    )
  }
export default FounderSection