import { useFaker } from '@akrc/reuse'

export default function Page() {
    const name = useFaker(42, faker => faker.person.firstName())
    return <div>
        <p data-testid="sync">{name}</p>
    </div>
}
