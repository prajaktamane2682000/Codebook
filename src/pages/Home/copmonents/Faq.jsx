import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
      {
        id: 1,
        question: "Why should I use CodeBook?",
        answer:
          "CodeBook is your one-stop destination for buying books online. Explore a vast collection, enjoy seamless shopping, and get your favorite books delivered to your doorstep with ease.",
      },
      {
        id: 2,
        question: "Can I access my eBook on mobile?",
        answer:
          "Yes, you can access your eBook on mobile by logging into your CodeBook account through the web.",
      },
      {
        id: 3,
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer refunds as per our refund policy. Please check our refund policy page for more details.",
      },
      {
        id: 4,
        question: "Do you support Internation payments?",
        answer:
          "Yes, we support international payments. You can purchase books from anywhere using globally accepted payment methods.",
      },
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}