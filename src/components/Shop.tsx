import { shopEntries } from '../data/links.ts'
import { ExternalLinkIcon } from './icons.tsx'

function Shop() {
  return (
    <section id="shop" className="section">
      <h2>Shop</h2>
      <p className="mx-auto mb-8 max-w-[50ch] text-center">
        Find Vivaria art in a few different places, each with its own lineup.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {shopEntries.map((entry) =>
          entry.ready ? (
            <a
              key={entry.label}
              href={entry.url}
              target="_blank"
              rel="noreferrer"
              className="card card-link"
            >
              {entry.images && (
                <div className="mb-4 flex gap-2">
                  {entry.images.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="aspect-square w-0 flex-1 rounded-lg object-cover"
                    />
                  ))}
                </div>
              )}
              <h3 className="flex items-center gap-1.5 text-paper">
                {entry.label}
                <ExternalLinkIcon className="h-4 w-4 text-ink-soft" />
              </h3>
              <p className="text-[0.95rem]">{entry.description}</p>
            </a>
          ) : (
            <div key={entry.label} className="card opacity-60">
              <h3 className="text-paper">{entry.label}</h3>
              <p className="text-[0.95rem]">{entry.description}</p>
              <span className="mt-3 inline-block rounded-full border border-border px-3 py-1 text-[0.75rem] uppercase tracking-[0.06em] text-ink-soft">
                Coming soon
              </span>
            </div>
          ),
        )}
      </div>
    </section>
  )
}

export default Shop
