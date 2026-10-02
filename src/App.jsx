import React from 'react'

export default function App() {

  return (

    <div className="max-w-7xl mx-auto py-12 xl:px-0 px-3">

      <nav className="flex justify-center items-center flex-col gap-4">

        <h1 className="font-masthead lg:text-8xl md:text-7xl text-5xl">
          The Birthday Times
        </h1>

        <div className="py-0.5 border-y-2 w-full border-black" />

        <div className="flex w-full flex-row justify-between items-center text-xs md:text-base">
          <p className="font-body font-medium">Vol. 26</p>
          <p className="font-body font-medium">Sunday, 04 October 2026</p>
          <p className="font-body font-medium">Special Birthday Edition</p>
        </div>

        <div className="py-0.1 border-y-1 w-full border-black" />

      </nav>

      {/* Hero */}
      <div className="py-5 flex-col flex justify-center items-center">

        <h2 className="text-4xl text-center font-body uppercase">
          Rannu Vanny Turns 21
        </h2>

        <p className="font-body">
          A Star Was Born, A Queen Was Crowned
        </p>

        <div className="flex flex-row justify-between w-full mt-10 gap-3 lg:gap-10">

          <img
            src="/vanny1.png"
            alt=""
            className="lg:w-xl md:w-xs w-35 object-cover"
          />

          <div className="flex flex-col items-center justify-center gap-4 border-l pl-5 xl:pl-10 xl:px-0 lg:px-3 text-justify">

            <p className="font-body">
              <span className="float-left text-8xl leading-[0.7] mr-2">R</span>
              annu Vanny Ramadhani turns 21 on October 4, and all major
              celebrations are officially underway. Surrounded by the people
              she loves, she begins a new chapter filled with new stories,
              new dreams, and plenty of moments worth remembering.
            </p>

            <p className="font-body">
              From the little things that make her smile to the people who
              have stayed by her side, this birthday is more than just
              another date on the calendar. It is a reminder of how far she
              has come and how many beautiful moments are still waiting ahead.
            </p>

            <p className="font-body">
              As she steps into her twenty-first year, may this year bring
              her more happiness, unforgettable memories, and reasons to keep
              smiling. Happy 21st birthday, Vanny.
            </p>

            <p className="font-body">
              Semoga semesta selalu memberimu kemudahan atas segala urusanmu,
              semoga do'amu terkabul satu persatu, semoga langkah pundakmu
              dikuatkan, semoga urusanmu dipermudah, semoga hatimu dilapangkan
              atas segala takdir yang di luar rencanamu, dan semoga kamu selalu
              dikelilingi orang-orang baik dimanapun kamu berada.
            </p>

          </div>

        </div>

      </div>

      <div className="py-0.1 border-y-1 w-full border-black" />
      {/* Letter for u */}
      {/* Letter For U */}
      <div className="flex flex-col lg:mt-10 border p-3">

        {/* Letter Header */}
        <div className="border p-5 w-fit text-center">
          <h3 className="text-4xl font-body font-bold">
            A Letter For U
          </h3>

          <p className="font-body">
            For the girl who means everything
          </p>
        </div>

        {/* Letter Content */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start mt-4 gap-6">

          {/* Text */}
          <div className="xl:w-3xl lg:w-3xl border p-5">

            <p className="font-body">
              <span className="float-left text-8xl leading-[0.7] mr-2">
                I
              </span>
              love u so much, my love. more than u'll ever know. Sometimes i
              don't even know how to put everything i feel into words because
              no matter what i say, it never feels enough. u mean so much to me,
              and loving u has become one of the most natural things i've ever
              done. u're always on my mind, whether we're talking, laughing,
              or even sitting in silence. thank u for staying, for loving me,
              and for choosing me every single day.
            </p>

            <p className="mt-4 font-body">
              i know i'm not perfect, and there are times when i make mistakes
              or don't express myself the way i should, but please know that my
              love for u has never been fake.
            </p>

            <p className="mt-4 font-body">
              every "i love u" i say comes from the deepest part of my heart.
              i want u to know that u're important to me. ur happiness matters,
              ur feelings matter, and i'll always try my best to be someone who
              makes u feel safe, loved, and appreciated.
            </p>

            <p className="mt-4 font-body">
              i want to be the person u can come home to after long day, the one
              who celebrates ur happiest moments and stays by ur side through
              the hardest ones.
            </p>

            {/* Indonesian Letter */}
            <p className="mt-4 font-body">
              Kalau nanti kita diizinkan menua bersama, aku berdoa agar kita
              menjadi tua yang tidak lapar jiwanya. Sehingga kita punya
              pertanyaan dan pembahasan bagus untuk anak dan keponakan kita.
              Aku berdoa agar kita menjadi orang tua yang tidak sibuk menanyakan
              anak dan keponakan kita belum menikah atau daftar PNS, mempermasalahkan
              mereka tidak ambil jurusan hukum atau kedokteran, menghakimi jika
              rambut mereka gondrong, mulet atau diwarnai merah.
            </p>

            <p className="mt-4 font-body">
              Sebab kita pasti mengerti rasanya menjadi muda yang dipertanyakan
              dan diragukan keputusannya.
            </p>

            {/* Lyrics / Promise */}
            <div className="my-8 border-y border-black py-5 text-center">
              <p className="font-body italic">
                I wanna share my lungs
              </p>

              <p className="font-body italic">
                I wanna grow my hair and nails all of my life
              </p>

              <p className="font-body italic">
                I hope to change your last name
                <br />
                and make you my wife
              </p>
            </div>

            <p className="font-body">
              Sekalipun kamu mengaku terbentuk dari tujuh batang bara neraka,
              kesialan, dan petaka, maka akan tetap aku cintai.
            </p>

          </div>

          {/* Photo */}
          <div className="w-full flex justify-center items-center flex-col lg:w-xl">
            <img
              src="/vanny2.jpeg"
              alt=""
              className="lg:w-full w-2xs object-cover"
            />

            <p className="font-body text-sm mt-2 text-center italic">
              somewhere between all the words,
              there's always you.
            </p>
          </div>

        </div>

      </div>

      {/* The Little Things */}
      <section className="mt-16">

        {/* Section Header */}
        <div className="flex items-end justify-between border-b-2 border-black pb-2">
          <div>
            <h2 className="font-masthead text-5xl">
              The Little Things
            </h2>

            <p className="font-body italic">
              Small moments, big reasons to love you.
            </p>
          </div>

          <p className="font-body font-medium">
            Vol. 21
          </p>
        </div>

        {/* Photos */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8">

          {/* Moment 01 */}
          <article className="flex flex-col">

            <img
              src="/vanny3.jpg"
              alt=""
              className="w-full aspect-[4/5] object-cover"
            />

            <div className="border-b border-black py-3">

              <p className="font-body text-xl font-bold">
                01 — THE WAY YOU KEEP GOING
              </p>

              <p className="font-body mt-2 text-justify">
                I found this photo when I was taking a picture of my girlfriend boarding the train alone. At the time, this photo felt completely normal. <br />
                But now, whenever I'm far away from her, I can't stop thinking about all those lonely rides home she took, and how she had to learn to be independent without me there.
              </p>

            </div>

          </article>

          {/* Moment 02 */}
          <article className="flex flex-col">

            <img
              src="/vanny5.jpg"
              alt=""
              className="w-full aspect-[4/5] object-cover"
            />

            <div className="border-b border-black py-3">

              <p className="font-body text-xl font-bold">
                02 — OUR LITTLE WORLD
              </p>

              <p className="font-body mt-2 text-justify">
                Night ride, silly jokes, nothing fancy but we're happy in our own bubble laughing at things no one else would get.
              </p>

            </div>

          </article>

          {/* Moment 03 */}
          <article className="flex flex-col">

            <img
              src="/vanny4.jpg"
              alt=""
              className="w-full aspect-[4/5] object-cover"
            />

            <div className="border-b border-black py-3">

              <p className="font-body text-xl font-bold">
                03 — JUST YOU
              </p>

              <p className="font-body mt-2 text-justify">
                One of my favorite things about you
                is simply the way you are.
              </p>

            </div>

          </article>

        </div>

      </section>
    </div>
  )
}

