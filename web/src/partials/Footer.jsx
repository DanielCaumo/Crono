import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link to="/" className="block" aria-label="Cruip">
            <svg width="100" height="25" viewBox="0 0 733 183" fill="#faeb64" xmlns="http://www.w3.org/2000/svg"><path d="M623.09 17.2727C623.09 23.4327 622.562 24.3127 618.338 25.3687C590.53 31.3527 570.818 47.5447 561.138 71.8327C555.682 85.5607 555.682 110.905 561.138 124.633C569.058 144.345 584.018 159.305 603.73 167.225C611.298 170.217 616.93 171.097 630.13 171.097C643.33 171.097 648.962 170.217 656.53 167.225C676.242 159.305 691.202 144.345 699.122 124.633C704.578 110.905 704.578 85.5607 699.122 71.8327C689.442 47.5447 669.73 31.3527 642.098 25.3687C637.698 24.3127 637.17 23.4327 637.17 17.2727C637.17 10.2327 637.17 10.2327 630.13 10.2327C623.09 10.2327 623.09 10.2327 623.09 17.2727ZM633.298 67.2567C633.65 84.8567 634.178 88.2007 637.17 91.1927C641.57 95.5927 641.57 100.873 637.346 105.097C635.41 107.033 633.65 110.729 633.298 113.545C632.594 120.057 627.666 120.057 626.962 113.545C626.61 110.729 624.85 107.033 622.914 105.097C618.514 100.697 618.69 95.5927 623.09 91.1927C626.258 88.0247 626.61 85.3847 626.61 67.7847C626.61 56.6967 627.138 47.1927 627.842 46.4887C631.362 42.9687 632.77 48.0727 633.298 67.2567Z" fill="#feca01"/>
            <path d="M687.252 21.6523C683.38 25.7003 682.676 27.4603 684.26 29.0443C685.844 30.6283 685.668 31.8603 683.732 33.9723C681.268 36.6123 681.268 37.1403 683.732 39.2523C685.844 41.0123 686.9 41.0123 689.012 39.2523C691.124 37.4923 692.18 37.4923 694.292 39.2523C696.58 41.1883 697.812 40.8363 701.332 37.4923C703.796 35.2043 705.732 32.3883 705.732 31.3323C705.732 30.2763 702.74 26.4043 699.044 22.8843L692.356 16.3723L687.252 21.6523Z" fill="#feca01"/>
            <path d="M124.805 154.645C118.294 160.243 111.003 164.54 102.93 167.535C94.8568 170.53 86.4909 172.027 77.832 172.027C71.1914 172.027 64.7786 171.148 58.5938 169.391C52.474 167.698 46.7122 165.289 41.3086 162.164C35.9701 158.974 31.0872 155.165 26.6602 150.738C22.2331 146.311 18.4245 141.428 15.2344 136.09C12.1094 130.686 9.66797 124.924 7.91016 118.805C6.21745 112.62 5.37109 106.207 5.37109 99.5664C5.37109 92.9258 6.21745 86.513 7.91016 80.3281C9.66797 74.1432 12.1094 68.3815 15.2344 63.043C18.4245 57.6393 22.2331 52.724 26.6602 48.2969C31.0872 43.8698 35.9701 40.0938 41.3086 36.9688C46.7122 33.7786 52.474 31.3372 58.5938 29.6445C64.7786 27.8867 71.1914 27.0078 77.832 27.0078C86.4909 27.0078 94.8568 28.5052 102.93 31.5C111.003 34.4297 118.294 38.7266 124.805 44.3906L109.961 68.8047C105.859 64.3776 101.009 60.9922 95.4102 58.6484C89.8112 56.2396 83.9518 55.0352 77.832 55.0352C71.6471 55.0352 65.8529 56.207 60.4492 58.5508C55.0456 60.8945 50.3255 64.0846 46.2891 68.1211C42.2526 72.0924 39.0625 76.8125 36.7188 82.2812C34.375 87.6849 33.2031 93.4466 33.2031 99.5664C33.2031 105.686 34.375 111.448 36.7188 116.852C39.0625 122.19 42.2526 126.878 46.2891 130.914C50.3255 134.951 55.0456 138.141 60.4492 140.484C65.8529 142.828 71.6471 144 77.832 144C83.9518 144 89.8112 142.828 95.4102 140.484C101.009 138.076 105.859 134.658 109.961 130.23L124.805 154.645ZM169.141 56.9883V113.043H197.168C201.009 113.043 204.622 112.327 208.008 110.895C211.393 109.397 214.355 107.379 216.895 104.84C219.434 102.301 221.419 99.3385 222.852 95.9531C224.349 92.5026 225.098 88.8568 225.098 85.0156C225.098 81.1745 224.349 77.5612 222.852 74.1758C221.419 70.7253 219.434 67.7305 216.895 65.1914C214.355 62.6523 211.393 60.6667 208.008 59.2344C204.622 57.737 201.009 56.9883 197.168 56.9883H169.141ZM169.141 169H141.113V28.9609H197.168C202.311 28.9609 207.259 29.6445 212.012 31.0117C216.764 32.3138 221.191 34.2018 225.293 36.6758C229.46 39.0846 233.236 42.0143 236.621 45.4648C240.072 48.8503 243.001 52.6263 245.41 56.793C247.884 60.9596 249.772 65.4193 251.074 70.1719C252.441 74.9245 253.125 79.8724 253.125 85.0156C253.125 89.8333 252.507 94.5208 251.27 99.0781C250.098 103.635 248.372 107.965 246.094 112.066C243.88 116.168 241.146 119.944 237.891 123.395C234.635 126.845 230.99 129.84 226.953 132.379L242.48 169H212.695L200.488 140.777L169.141 140.973V169ZM408.789 99.5664C408.789 106.207 407.91 112.62 406.152 118.805C404.46 124.924 402.051 130.686 398.926 136.09C395.801 141.428 392.025 146.311 387.598 150.738C383.171 155.165 378.288 158.974 372.949 162.164C367.611 165.289 361.849 167.698 355.664 169.391C349.479 171.148 343.066 172.027 336.426 172.027C329.785 172.027 323.372 171.148 317.188 169.391C311.068 167.698 305.306 165.289 299.902 162.164C294.564 158.974 289.681 155.165 285.254 150.738C280.827 146.311 277.018 141.428 273.828 136.09C270.703 130.686 268.262 124.924 266.504 118.805C264.811 112.62 263.965 106.207 263.965 99.5664C263.965 92.9258 264.811 86.513 266.504 80.3281C268.262 74.1432 270.703 68.3815 273.828 63.043C277.018 57.7044 280.827 52.8216 285.254 48.3945C289.681 43.9674 294.564 40.1914 299.902 37.0664C305.306 33.9414 311.068 31.5326 317.188 29.8398C323.372 28.082 329.785 27.2031 336.426 27.2031C343.066 27.2031 349.479 28.082 355.664 29.8398C361.849 31.5326 367.611 33.9414 372.949 37.0664C378.288 40.1914 383.171 43.9674 387.598 48.3945C392.025 52.8216 395.801 57.7044 398.926 63.043C402.051 68.3815 404.46 74.1432 406.152 80.3281C407.91 86.513 408.789 92.9258 408.789 99.5664ZM380.957 99.5664C380.957 93.4466 379.785 87.6849 377.441 82.2812C375.098 76.8125 371.908 72.0924 367.871 68.1211C363.9 64.0846 359.18 60.8945 353.711 58.5508C348.307 56.207 342.546 55.0352 336.426 55.0352C330.241 55.0352 324.447 56.207 319.043 58.5508C313.639 60.8945 308.919 64.0846 304.883 68.1211C300.846 72.0924 297.656 76.8125 295.312 82.2812C292.969 87.6849 291.797 93.4466 291.797 99.5664C291.797 105.686 292.969 111.448 295.312 116.852C297.656 122.19 300.846 126.878 304.883 130.914C308.919 134.951 313.639 138.141 319.043 140.484C324.447 142.828 330.241 144 336.426 144C342.546 144 348.307 142.828 353.711 140.484C359.18 138.141 363.9 134.951 367.871 130.914C371.908 126.878 375.098 122.19 377.441 116.852C379.785 111.448 380.957 105.686 380.957 99.5664ZM539.258 169H509.277L455.273 76.8125V169H427.246V28.9609H457.227L511.23 121.246V28.9609H539.258V169Z" fill="#feca01"/>
          </svg>
                </Link>
              </div>
              <div className="text-gray-400">Aplicação de gerenciamento para personal trainers, desenvolvida como projeto integrador do curso de Técnico de Desenvolvimento de Sistemas do Senac Tech - Porto Alegre, RS.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Desenvolvedores</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Daniel Caumo</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Kelen Vargas</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Recursos</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Link 1</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Link 2</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Link 3</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Link 4</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Link 5</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Mais</h6>
                <ul>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Link 1</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Link 2</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Link 3</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Link 4</Link>
                  </li>
                  <li className="mb-1">
                    <Link to="#" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Link 5</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Daniel Caumo & Kelen Vargas. Todos os direitos reservados.</div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
