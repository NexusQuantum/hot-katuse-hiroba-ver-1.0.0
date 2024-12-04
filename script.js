function $(documents) {
  return document.getElementById(documents);
}

function wait(ms) {
  //待機プログラム wait(ms) ms秒待機する
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function style(nakami) {
  $("mains").style.backgroundImage = `url(${nakami})`;
}

async function slider(times) {
  for (i = 0; i == i; i = 0) {
    style("23773293_s.jpg"); //表示
    $("mains").classList.add("is-animated"); //ズームイン

    await wait(times / 2); //待機
    $("mains").classList.remove("is-animated"); //ズームイン削除
    await wait(times / 2); //待機
    style("30200893_s.jpg"); //表示
    $("mains").classList.add("is-animated"); //ズームイン

    await wait(times / 2); //待機
    $("mains").classList.remove("is-animated"); //ズームイン削除
    await wait(times / 2); //待機

    style("30200896_s.jpg"); //表示
    $("mains").classList.add("is-animated"); //ズームイン

    await wait(times); //待機
    $("mains").classList.remove("is-animated"); //ズームイン削除
    await wait(times / 2); //待機
  }

}

slider(5000)
