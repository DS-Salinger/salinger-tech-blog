import Link from 'next/link'

const HomeAuthor: React.FC = () => {
  return(
    <div className="grid grid-cols-3">
      <div className="grid col-span-1 h-44 mx-2 content-center">
	<img src="/assets/author.png"
	       width={120} height={120} alt="Author pic"/>
      </div>

      <div className="col-span-2 h-44">
	<div className="m-2">
          <h2 className="text-2xl">さりんじゃー</h2>
	  <p className="text-base align-botom">
            &nbsp;X: &nbsp;
            <Link passHref legacyBehavior
		  href="https://twitter.com/salinger001101">
	      <a className="text-myorange hover:underline">@salinger001101</a>
	    </Link>
	  </p>
	</div>
      
	<div className="break-words mx-1 my-1 text-sm">
	  <p>　大学ではAI (NLP+情報検索) が専門。ソシャゲ会社→受託分析の会社でデータエンジニア&マネジメント経験→自分で受託分析会社を立ち上げ。社会人学生として通信制芸大で建築系学科も卒業。</p>
	</div>
      </div>

      <div className="col-span-1 h-40 w-36  mb-12">
      	<h3 className="text-lg sm:mt-6 md:mt-2 ml-2">資格など</h3>
	  <ul className="list-disc ml-5 mt-1
			 text-xs pb-1">
	    <li className="py-0.5">新潟の某大学情報系<br/>修士/学士(工学)</li>
	    <li className="py-0.5">通信制某大学建築系<br/>学士(芸術)</li>
	    <li className="py-0.5">応用情報処理技術者</li>
	    <li className="py-0.5">宅地建物取引士</li>
	  </ul>	
      </div>
	
	<div className="col-span-2 h-40 w-70 mb-12">
      	  <h3 className="text-lg ml-2 sm:mt-6 md:mt-2">スキルセット</h3>
	  <table className="table-fixed -mr-1
			    ml-2 md:mt-1 text-xs">
	  <tbody>
	    <tr>
	      <td className="w-[5.5rem] py-0.5">データ分析</td>
	      <td>Python / R 両方メイン</td>
	    </tr>
	    <tr>
	      <td className="w-[5.5rem] py-0.5">システム開発</td>
	      <td>主にPython, JS / TS 学習中</td>
	    </tr>
	    <tr>
	      <td className="w-[5.5rem] py-0.5">インフラ</td>
	      <td>AWS, Azure, GCP, <br />多少オンプレ</td>
	    </tr>
	    <tr>
	      <td className="w-[5.5rem] py-0.5 align-top">その他</td>
	      <td>MySQL, PostgreSQL, Athena, RedShift,<br />BigQuery, TreasureData, etc.</td>
	    </tr>
	  </tbody>
	</table>
      </div>

	<div className="grid place-items-end sm:mt-0 md:mt-1">
	  {/* <a href="#"
	      className="text-lg text-myorange
	      hover:underline">
	      More details
	      </a> */}
	</div>

    </div>
  );
}

export default HomeAuthor;
