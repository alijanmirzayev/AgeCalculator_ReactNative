import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SettingSvg(props: any) {
  return (
    <Svg
      width="26px"
      height="26px"
      viewBox="0 0 24 24"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.136 3.361l.995-.1-.995.1zm-.152-.82L13.095 3l.889-.458zm.447 2.277l.795-.607-.795.607zm.929.384l-.134-.99.133.99zm1.238-.82l.633.773-.633-.774zm.687-.473l.305.953-.305-.953zm.702.035l.398-.917-.398.917zm.637.538l-.707.707.707-.707zm.894.894l.707-.707-.707.707zm.538.637l.917-.398-.917.398zm.035.702l.952.304-.952-.304zm-.472.687l-.774-.633.774.633zm-.822 1.239l-.99-.134.99.134zm.385.928l-.606.795.606-.795zm1.457.295l.099-.995-.1.995zm.82.152l.458-.889-.459.89zm.47.521l.93-.367-.93.367zm.001 2.926l-.93-.368.93.368zm-.472.52l.459.89-.459-.89zm-.82.153l-.099-.995-.033.003-.032.006.165.986zm0 0l.1.995.033-.003.032-.005-.164-.987zm-1.456.295l-.606-.795.607.795zm-.384.929l-.991.133.99-.133zm.821 1.238l-.774.633.774-.633zm.472.687l-.953.304.953-.304zm-.035.702l-.918-.398.918.398zm-.538.637l.707.707-.707-.707zm-.894.893l-.707-.707.707.707zm-.637.538l.398.918-.398-.918zm-.702.035l-.304.953.304-.953zm-.687-.472l.633-.774-.008-.006-.625.78zm0 0l-.633.774.008.007.625-.78zm-1.238-.82l.133-.992-.133.991zm-.929.384l.795.606-.795-.606zm-.295 1.456l-.995-.1.995.1zm-.152.82L13.095 21l.889.459zm-.521.472l-.368-.93.368.93zm-2.926 0l.368-.93-.368.93zm-.52-.472l.888-.458-.889.458zm-.153-.82l-.995.1.995-.1zm-.295-1.456l-.795.607.795-.607zm-.928-.384l-.134-.992.134.991zm-1.239.82l-.633-.773-.016.013-.015.013.664.748zm0 0l.633.775.016-.013.015-.014-.664-.747zm-.687.473l.304.952-.304-.952zm-.702-.035l-.398.917.398-.917zm-.637-.538l.707-.707-.707.707zm-.894-.894l-.707.707.707-.707zm-.538-.637l.918-.397-.918.397zm-.035-.702l.953.305-.953-.305zm.472-.687l.774.633-.774-.633zm.821-1.239l.992.134-.992-.134zm-.384-.928l.606-.795-.606.795zm-1.457-.295l-.1.995.1-.995zm-.82-.152L3 13.095l-.458.889zm-.47-.521l-.93.367.93-.367zm0-2.926l-.93-.368.93.368zm.47-.52l-.458-.89.459.89zm.82-.153v-1h-.05l-.049.005.1.995zm0 0v1h.05l.05-.005-.1-.995zm1.457-.295l-.606-.795.606.795zm.385-.928l.991-.134-.991.134zM4.38 7.4l.774-.632-.774.633zm-.472-.687l.953-.304-.953.304zm.035-.702l-.917-.397.917.397zm.538-.637l.707.707-.707-.707zm.894-.893l-.707-.707.707.707zm.637-.538l-.398-.918.398.918zm.702-.035l.304-.953-.304.953zm.687.472l.633-.774-.633.774zm1.238.821l.134-.991-.134.991zm.93-.385l-.796-.606.795.606zm.294-1.456l.995.1-.995-.1zm.152-.82l-.889-.458.89.459zm.521-.471l.368.93-.368-.93zm2.926 0l.367-.93-.367.93zm1.668 1.192c-.02-.204-.04-.405-.068-.575a2.02 2.02 0 00-.19-.604L13.095 3c-.023-.045-.018-.061-.005.018.015.089.028.213.051.443l1.99-.2zm.095.95c.063.082.043.119.008-.076-.033-.186-.06-.447-.103-.874l-1.99.199c.04.394.074.748.125 1.03.049.27.135.625.37.933l1.59-1.213zm0 0l-1.59 1.212a2 2 0 001.857.77l-.267-1.983zm.739-.605a13.01 13.01 0 01-.691.545c-.163.113-.151.073-.048.06l.267 1.982c.384-.052.696-.242.922-.4.235-.162.51-.388.816-.639l-1.266-1.548zm1.016-.65a2.02 2.02 0 00-.561.292c-.14.1-.297.229-.455.358l1.266 1.548c.179-.146.276-.225.35-.277.065-.047.056-.031.009-.016l-.609-1.905zm1.404.07a2 2 0 00-1.404-.07l.609 1.905.795-1.835zm.946.748c-.144-.145-.287-.288-.417-.402a2.02 2.02 0 00-.53-.346l-.794 1.835c-.046-.02-.053-.036.007.017.068.06.157.147.32.31l1.414-1.414zm.894.894l-.894-.894-1.414 1.414.894.894 1.414-1.414zm.748.946a2.02 2.02 0 00-.346-.53c-.114-.129-.257-.272-.402-.416L18.81 6.083c.163.163.25.252.31.32.053.06.037.053.017.007l1.835-.795zm.07 1.404a2 2 0 00-.07-1.404l-1.835.795 1.905.609zm-.65 1.016c.13-.158.258-.314.358-.455.106-.148.22-.332.292-.561l-1.905-.609c.015-.047.03-.056-.016.01-.052.073-.13.17-.277.349l1.548 1.266zm-.605.739c-.013.103-.053.115.06-.048.107-.155.273-.358.545-.69l-1.548-1.267c-.25.306-.477.581-.64.816-.157.226-.347.538-.399.922l1.982.267zm0 0l-1.982-.267a2 2 0 00.77 1.857l1.212-1.59zm.95.095a13.02 13.02 0 01-.874-.103c-.195-.035-.158-.055-.076.008l-1.212 1.59c.308.235.662.321.934.37.281.05.635.085 1.029.125l.199-1.99zm1.179.258a2.02 2.02 0 00-.604-.19c-.17-.028-.371-.048-.575-.068l-.199 1.99c.23.023.354.036.443.05.08.014.063.019.018-.004l.917-1.777zm.943 1.043a2 2 0 00-.943-1.043L21 10.905l1.86-.735zm.14 1.198c0-.204 0-.407-.011-.579a2.017 2.017 0 00-.13-.62L21 10.906c-.018-.047-.012-.063-.006.017.006.09.006.215.006.446h2zm0 1.264v-1.264h-2v1.264h2zm-.14 1.198c.088-.223.117-.437.129-.62.011-.171.011-.374.011-.578h-2c0 .231 0 .356-.006.446-.006.08-.012.064.006.017l1.86.735zm-.943 1.043a2 2 0 00.943-1.043L21 13.095l.917 1.778zm-1.179.258c.204-.02.405-.04.575-.068.18-.03.39-.08.604-.19L21 13.095c.044-.023.061-.018-.018-.005a7.673 7.673 0 01-.443.051l.2 1.99zm.065-.008l-.329-1.973.329 1.973zm-1.014.103c-.083.063-.12.043.075.008.186-.033.447-.06.874-.103l-.199-1.99c-.393.04-.748.074-1.029.125-.271.049-.626.135-.934.37l1.213 1.59zm0 0l-1.213-1.59a2 2 0 00-.77 1.857l1.983-.267zm.604.738a13.074 13.074 0 01-.545-.69c-.113-.163-.073-.151-.06-.048l-1.981.267c.052.384.241.696.399.922.163.235.389.51.639.816l1.548-1.267zm.65 1.016a2.02 2.02 0 00-.292-.56c-.1-.141-.229-.297-.358-.456l-1.548 1.267c.146.179.225.275.277.349.047.065.032.057.016.01l1.905-.61zm-.07 1.405a2 2 0 00.07-1.405l-1.905.61 1.835.795zm-.748.946c.145-.145.288-.287.402-.417.12-.138.25-.309.346-.53l-1.835-.795c.02-.046.036-.052-.017.008-.06.068-.147.156-.31.32l1.414 1.414zm-.894.893l.894-.893-1.414-1.414-.894.893 1.414 1.415zm-.946.749a2.02 2.02 0 00.53-.347c.129-.113.272-.257.416-.402l-1.414-1.414a7.889 7.889 0 01-.32.31c-.06.054-.053.038-.007.018l.795 1.835zm-1.404.07a2 2 0 001.404-.07l-.795-1.835-.609 1.905zm-1.016-.65c.158.129.314.258.455.358.148.105.332.219.561.292l.609-1.905c.047.015.056.03-.01-.016a7.745 7.745 0 01-.349-.277l-1.266 1.547zm.008.006l1.25-1.561-1.25 1.561zm-.747-.61c-.103-.015-.115-.055.048.058.155.108.358.273.69.545l1.267-1.547c-.306-.251-.581-.477-.816-.64-.226-.158-.538-.347-.922-.399l-.267 1.982zm0 0l.267-1.983a2 2 0 00-1.857.77l1.59 1.212zm-.095.949c.043-.427.07-.689.103-.874.035-.195.055-.159-.008-.076l-1.59-1.213c-.235.308-.321.663-.37.934-.05.282-.085.636-.125 1.03l1.99.199zm-.259 1.179c.11-.214.16-.424.19-.604.03-.17.049-.371.07-.575l-1.99-.2c-.024.231-.037.355-.052.444-.013.08-.018.063.005.018l1.777.917zm-1.041.943a2 2 0 001.041-.943L13.095 21l.736 1.86zm-1.2.14c.205 0 .408 0 .58-.011.182-.012.396-.04.62-.13L13.095 21c.047-.018.063-.012-.017-.006a7.77 7.77 0 01-.446.006v2zm-1.263 0h1.264v-2h-1.264v2zm-1.198-.14c.223.088.437.117.62.129.171.011.374.011.578.011v-2c-.231 0-.356 0-.446-.006-.08-.006-.064-.012-.017.006l-.735 1.86zm-1.043-.943a2 2 0 001.043.943l.735-1.86-1.777.917zm-.258-1.179c.02.204.04.405.068.575.03.18.08.39.19.604L10.905 21c.023.044.018.061.005-.018a7.668 7.668 0 01-.051-.443l-1.99.2zm-.095-.95c-.063-.082-.043-.12-.008.076.033.185.06.447.103.874l1.99-.199c-.04-.394-.074-.748-.125-1.03-.049-.27-.135-.625-.37-.933l-1.59 1.212zm0 0l1.59-1.212a2 2 0 00-1.857-.77l.267 1.982zm-.739.605c.333-.272.536-.438.691-.545.163-.113.151-.073.048-.06l-.267-1.982c-.384.052-.696.242-.922.4-.235.162-.51.388-.816.639l1.266 1.548zm.031-.027l-1.328-1.495 1.328 1.495zm-1.047.677a2.02 2.02 0 00.561-.292c.14-.1.297-.229.455-.358L6.77 18.845a7.767 7.767 0 01-.35.277c-.065.047-.056.032-.009.016l.609 1.905zm-1.404-.07a2 2 0 001.404.07l-.609-1.905-.795 1.835zm-.947-.748c.145.145.288.288.418.402.137.12.308.25.53.346l.794-1.835c.046.02.053.036-.007-.017a7.694 7.694 0 01-.32-.31l-1.415 1.414zm-.893-.894l.893.894 1.415-1.414-.894-.894-1.414 1.414zm-.748-.946c.095.22.226.392.346.53.114.129.257.272.402.416l1.414-1.414a7.733 7.733 0 01-.31-.32c-.053-.06-.037-.053-.017-.007l-1.835.795zm-.07-1.404a2 2 0 00.07 1.404l1.835-.795-1.905-.609zm.65-1.016c-.13.158-.258.314-.358.455a2.02 2.02 0 00-.292.561l1.905.609c-.016.047-.03.056.016-.01.052-.073.13-.17.277-.349l-1.548-1.266zm.604-.739c.014-.103.054-.115-.059.048-.107.155-.273.358-.545.69l1.548 1.267c.25-.306.477-.581.64-.816.157-.226.347-.538.399-.922l-1.983-.267zm0 0l1.983.267a2 2 0 00-.77-1.857l-1.213 1.59zm-.95-.095c.428.043.69.07.875.103.195.035.158.055.075-.008l1.213-1.59c-.308-.235-.662-.321-.934-.37-.281-.05-.635-.085-1.03-.125l-.198 1.99zm-1.178-.258c.214.11.424.16.604.19.17.028.371.048.575.068l.199-1.99a7.675 7.675 0 01-.443-.05c-.08-.014-.063-.019-.018.004l-.917 1.777zM1.14 13.83a2 2 0 00.943 1.043L3 13.095l-1.86.735zM1 12.632c0 .204 0 .407.011.579.012.182.04.396.13.62L3 13.094c.018.047.012.063.007-.017A7.745 7.745 0 013 12.632H1zm0-1.264v1.264h2v-1.264H1zm.14-1.199a2.02 2.02 0 00-.129.62c-.012.172-.011.375-.011.58h2c0-.232 0-.357.007-.447.005-.08.011-.064-.007-.017l-1.86-.736zm.943-1.041a2 2 0 00-.943 1.041l1.86.736-.917-1.777zm1.179-.26c-.204.021-.405.04-.575.07-.18.03-.39.08-.604.19L3 10.905c-.045.023-.061.018.018.005.089-.015.213-.028.443-.051l-.199-1.99zm.1-.004v2-2zm0 0v2-2zm.85-.09c.083-.063.12-.043-.076-.008-.185.033-.447.06-.874.103l.2 1.99c.393-.04.747-.074 1.029-.125.271-.049.626-.135.934-.37l-1.213-1.59zm0 0l1.213 1.59a2 2 0 00.769-1.857l-1.982.267zm-.605-.739c.272.332.438.536.546.691.113.163.073.151.059.048l1.982-.267c-.052-.384-.241-.695-.399-.922-.163-.235-.39-.51-.64-.816L3.607 8.035zm-.65-1.017c.073.23.186.413.292.562.1.14.229.297.358.455L5.155 6.77a7.742 7.742 0 01-.277-.35c-.047-.065-.031-.057-.016-.01l-1.905.61zm.07-1.403a2 2 0 00-.07 1.403l1.905-.608-1.835-.795zm.748-.947c-.145.145-.288.287-.402.417a2.02 2.02 0 00-.346.53l1.835.795c-.02.046-.036.053.017-.008.06-.068.147-.156.31-.32L3.775 4.668zm.894-.893l-.894.893L5.19 6.082l.894-.893-1.414-1.414zm0 0l1.414 1.414-1.414-1.414zm.946-.749a2.02 2.02 0 00-.53.347c-.129.114-.272.257-.416.402l1.414 1.414c.163-.164.252-.251.32-.31.06-.054.053-.038.007-.018l-.795-1.835zm1.404-.07a2 2 0 00-1.404.07l.795 1.835.609-1.905zm1.016.65c-.158-.129-.314-.257-.455-.357a2.02 2.02 0 00-.561-.293L6.41 4.861c-.047-.015-.056-.03.01.016.073.053.17.131.349.278l1.266-1.548zm.739.605c.103.014.115.054-.048-.059a13.022 13.022 0 01-.69-.545L6.768 5.155c.306.25.581.476.816.64.226.157.538.346.922.398l.267-1.982zm0 0l-.267 1.982a2 2 0 001.857-.77l-1.59-1.212zm.095-.95c-.043.428-.07.69-.103.875-.035.195-.055.158.008.075l1.59 1.213c.235-.308.321-.663.37-.934.05-.281.086-.636.125-1.03l-1.99-.198zm.258-1.178a2.02 2.02 0 00-.19.604c-.028.17-.048.371-.068.575l1.99.199c.023-.23.036-.354.05-.443.014-.08.019-.063-.004-.018l-1.778-.917zm1.043-.943a2 2 0 00-1.043.943L10.905 3l-.735-1.86zM11.368 1c-.204 0-.407 0-.579.011a2.02 2.02 0 00-.62.129L10.906 3c-.047.018-.063.012.017.007.09-.006.215-.007.446-.007V1zm1.264 0h-1.264v2h1.264V1zm1.198.14a2.02 2.02 0 00-.62-.129C13.04.999 12.837 1 12.633 1v2c.231 0 .356 0 .446.007.08.005.064.011.017-.007l.735-1.86zm1.043.943a2 2 0 00-1.043-.943L13.095 3l1.777-.917zM15 12a3 3 0 01-3 3v2a5 5 0 005-5h-2zm-3-3a3 3 0 013 3h2a5 5 0 00-5-5v2zm-3 3a3 3 0 013-3V7a5 5 0 00-5 5h2zm3 3a3 3 0 01-3-3H7a5 5 0 005 5v-2z"
      />
    </Svg>
  )
}

export default SettingSvg
