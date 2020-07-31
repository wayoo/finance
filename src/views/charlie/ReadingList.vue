<template>
  <div class="page">
    {{ bookList.length }}
    <div class="books">
      <list>
        <list-item :key="item.title" v-for="item in bookList">
          <span>
            [{{ item.year }}]
          </span>
          <span class="title">{{ item.title }}</span>
          <span> ({{ item.author }}) </span>
          &nbsp;&nbsp;
          <tag color="success" v-if="item.state === 1">Reading</tag>
          <tag color="warning" v-if="item.state === 2">Listening</tag>
        </list-item>
      </list>
    </div>
  </div>
</template>

<script>
import '../iview';
import '../style.less';

export default {
  data() {
    return {
      bookList: [
        {
          title: 'Deep Simplicity: Bringing Order to Chaos and Complexity',
          author: 'John Gribbin',
          year: '2005',
          state: 1,
        },
        {
          title: 'F.I.A.S.C.O.: The Inside Story of a Wall Street Thader',
          author: 'Frank Partnoy',
          year: '1999',
        },
        {
          title: 'Ice Age',
          author: 'John Gribbin, Mary Gribbin',
          year: 2002,
        },
        {
          title: 'How the Scots Invented the Modern World: The True Story of How Western Europe\'s Poorest Nation Created Our World & Everything in It',
          author: 'Arthur Herman',
          year: 2002,
        },
        {
          title: 'Models of My Life',
          author: 'Herbert A. Simon',
          year: 1996,
        },
        {
          title: 'A Matter of Degrees: What Temperature Reveals about the Past and Future of Our Species, Planet, and Universe',
          author: 'Gino Segre',
          year: 2002,
        },
        {
          title: 'Andrew Carnegie',
          author: 'Joseph Frazier Wall',
          year: 1970,
        },
        {
          title: 'Guns, Germs and Steel: The Fate of Human Societies',
          author: 'Jared Diamond',
          year: 1999,
        },
        {
          title: 'The Third Chimpanzee: The Evolution and Future of the Human Animal',
          author: 'Jared Diamond, Rob Shapiro',
          year: 1992,
        },
        {
          title: 'Influence: The Psychology of Persuasion',
          author: 'Robert B. Cialdini, George Newbern',
          year: 1998,
          state: 2,
        },
        {
          title: 'The Autobiography of Benjamin Franklin',
          author: 'Benjamin Franklin',
          year: 2003,
        },
        {
          title: 'Living Within Limits: Ecology, Economics, and Population Taboos',
          author: 'Garrett Hardin',
          year: 1995,
        },
        {
          title: 'The Seffish Gene',
          author: 'Richard Dawkins, Lalla Ward',
          year: 1990,
        },
        {
          title: 'Titan: The Life of John D. Rockefeller, Sr.',
          author: 'Ron Chernow, Grover Gardner',
          year: 2004,
        },
        {
          title: 'The Wealth and Poverty of Nations: Why Some Are So Rich and Some So Poor',
          author: 'David S. Landes',
          year: 1998,
        },
        {
          title: 'The Warren Buffett Portfolio: Mastering the Power of the Focus Investment Strategy',
          author: 'Robert G. Hagstrom',
          year: 2000,
        },
        {
          title: 'Genome: The Autobiography Of A Species In 23 Chapters (P.S.)',
          author: 'Matt Ridley',
          year: 2000,
        },
        {
          title: 'Getting to Yes: Negotiating Agreement Without Giving In',
          author: 'Roger Fisher , William L. Ury',
          year: 1991,
        },
        {
          title: 'Three Scientists and Their Gods: A Search for Meaning in an Age of Information',
          author: 'Robert Wright',
          year: 1989,
        },
        {
          title: 'Only the Paranoid Survive: How to Exploit the Crisis Points That Challenge Every Company',
          author: 'Andrew S. Grove',
          year: 1996,
        },
        {
          title: 'Les Schwab Pride in Performance: Keep It Going',
          author: 'Les Schwab',
          year: 1986,
        },
        {
          title: 'Men and Rubber: The Story of Business',
          author: 'Harvev S. Firestone',
          year: 1926,
        },
        {
          title: 'Men to Match My Mountains: The Opening of the Far West 1840 -1890',
          author: 'Irving Stone',
          year: 1956,
        },
      ],
    };
  },
};
</script>

<style lang="less">
.books {
  .title {
    font-weight: bold;
    padding: 0 10px;
  }
}
</style>
