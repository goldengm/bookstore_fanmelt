import React from 'react'
import { SearchAppBar, Chip, Card, Header } from ".."
import { Container } from './Styled'

interface ITag {
  name: string
  label: string
  selected: boolean
  count: number
}

interface IList {
  name: string
  title: string
  img: string
  tags: string[]
  price: number
}

interface IProps {
  tags: ITag[]
  list: IList[]
  onTagClick: (i: number) => void
}

export const FeaturedContent = ({ tags, list, onTagClick }: IProps) => {
  return (
    <Container>
      <Header />
      <SearchAppBar onChange={() => {}} />

      <div className="content">
        <div className="nav">
          <div className="title text-2xl">Categories</div>
          <div className="categories">
            {tags &&
              tags.map((tag, i) => (
                <Chip
                  label={tag.label}
                  onClick={() => onTagClick(i)}
                  selected={tag.selected}
                  count={tag.count}
                />
              ))}
          </div>
        </div>

        <div className="list">
          <div className="dropdown">
            <select>
              <option value="recommended">Recommended</option>
              <option value="highToLow">Price High to Low</option>
              <option value="lowToHigh">Price Low to High</option>
              <option value="alphbetical">Alphabetical A to Z</option>
            </select>
          </div>

          {list &&
            list.map(item => (
              <Card
                title={item.title}
                img={item.img}
                name={item.name}
                tags={item.tags}
                price={item.price}
              />
            ))}
        </div>
      </div>

      {/* <Footer /> */}
    </Container>
  );
}

