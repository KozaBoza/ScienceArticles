export default function ContactPage() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center pt-16">
      <h1 className="font-serif text-[4rem] mb-20 uppercase">Contact</h1>
      
      <div className="w-full flex gap-12 px-8">
        
        {/* Lewa strona: Dane kontaktowe */}
        <div className="w-1/2 flex flex-col gap-6">
          <div className="w-full aspect-square bg-[#F3F3F3]"></div>
          {/* Social Media ikony */}
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-[#262CAF]"></div>
            ))}
          </div>
        </div>

        {/* Prawa strona: Formularz */}
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex gap-4 w-full">
            <input type="text" className="h-12 flex-1 bg-[#F3F3F3] border-none outline-none px-4" />
            <input type="text" className="h-12 flex-1 bg-[#F3F3F3] border-none outline-none px-4" />
          </div>
          <textarea className="w-full h-64 bg-[#F3F3F3] border-none outline-none p-4 resize-none"></textarea>
          <button className="w-full h-12 bg-[#262CAF] mt-auto"></button>
        </div>

      </div>
    </div>
  );
}