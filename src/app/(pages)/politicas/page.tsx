import { policies } from "./data/policies";

export default function page () {
  return (
    <div className="w-full bg-white h-full flex items-center text-custom-black py-10">
      <div className="max-w-[1300px] m-auto px-4 flex flex-col gap-3">
        {policies.map((item, i) => (
          <article key={i}>
            <h2 className="font-semibold">{item.title}</h2>
            {item.list ? (
              <ul>
                {item.list.map((item, i) => (
                  <li className="text-sm list-disc ml-4" key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm">{item.description}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
