(()=>{
  const root = document.getElementById('root');
  const title = document.createElement('h1');
  const board = document.createElement('div');
  const images = document.createElement('div')
  let btn,audio;

  const ibuben = [
    {
      name: "Ա ա",
      sound: "./sound/A_a.mp3",
      vowel: "vowel"
    },
    {
      name: "Բ բ",
      sound: "./sound/B_b.mp3",
      vowel: "consonant"
    },
    {
      name: "Գ գ",
      sound: "./sound/G_g.mp3",
      vowel: "consonant"
    },
    {
      name: "Դ դ",
      sound: "./sound/D_d.mp3",
      vowel: "consonant"
    },
    {
      name: "Ե ե",
      sound: "./sound/E_e.mp3",
      vowel: "set"
    },
    {
      name: "Զ զ",
      sound: "./sound/Z_z.mp3",
      vowel: "consonant"
    },
    {
      name: "Է է",
      sound: "./sound/!E_e.mp3",
      vowel: "vowel"
    },
     {
      name: "Ը ը",
      sound: "./sound/@_@.mp3",
      vowel: "vowel"
    }, 
    {
      name: "Թ թ",
      sound: "./sound/!T_t.mp3",
      vowel: "consonant"
    },
    {
      name: "Ժ ժ",
      sound: "./sound/Jam_j.mp3",
      vowel: "consonant"
    },
    {
      name: "Ի ի",
      sound: "./sound/I_i.mp3",
      vowel: "vowel"
    },
    {
      name: "Լ լ",
      sound: "./sound/L_l.mp3",
      vowel: "consonant"
    },
    {
      name: "Խ խ",
      sound: "./sound/Kh_kh.mp3",
      vowel: "consonant"
    },{
      name: "Ծ ծ",
      sound: "./sound/Ciran_c.mp3",
      vowel: "consonant"
    },
    {
      name: "Կ կ",
      sound: "./sound/K_k.mp3",
      vowel: "consonant"
    },
    {
      name: "Հ հ",
      sound: "./sound/H_h.mp3",
      vowel: "consonant"
    },
    {
      name: "Ձ ձ",
      sound: "./sound/Dz_dz.mp3",
      vowel: "consonant"
    },
    {
      name: "Ղ ղ",
      sound: "./sound/Gh_ghek.mp3",
      vowel: "consonant"
    },
    {
      name: "Ճ ճ",
      sound: "./sound/Chutik.mp3",
      vowel: "consonant"
    },
    {
      name: "Մ մ",
      sound: "./sound/M_m.mp3",
      vowel: "consonant"
    },
    {
      name: "Յ յ",
      sound: "./sound/yasaman_y.mp3",
      vowel: "consonant"
    },
    {
      name: "Ն ն",
      sound: "./sound/N_n.mp3",
      vowel: "consonant"
    },
    {
      name: "Շ շ",
      sound: "./sound/Sh_shun.mp3",
      vowel: "consonant"
    },
    {
      name: "Ո ո",
      sound: "./sound/Vo_vo.mp3",
      vowel: "set"
    },
    {
      name: "Չ չ",
      sound: "./sound/Ch_chamich.mp3",
      vowel: "consonant"
    },
    {
      name: "Պ պ",
      sound: "./sound/P_p.mp3",
      vowel: "consonant"
    },
    {
      name: "Ջ ջ",
      sound: "./sound/Jur_j.mp3",
      vowel: "consonant"
    },
    {
      name: "Ռ ռ",
      sound: "./sound/R-r.mp3",
      vowel: "consonant"
    },
    {
      name: "Ս ս",
      sound: "./sound/S_s.mp3",
      vowel: "consonant"
    },
    {
      name: "Վ վ",
      sound: "./sound/V_v.mp3",
      vowel: "consonant"
    },
    {
      name: "Տ տ",
      sound: "./sound/T_t.mp3",
      vowel: "consonant"
    },
    {
      name: "Ր ր",
      sound: "./sound/!R_r.mp3",
      vowel: "consonant"
    },
    {
      name: "Ց ց",
      sound: "./sound/C_c.mp3",
      vowel: "consonant"
    },
    {
      name: "Ու ու",
      sound: "./sound/U_u.mp3",
      vowel: "vowel"
    },
    {
      name: "Փ փ",
      sound: "./sound/!P_p.mp3",
      vowel: "consonant"
    },
    {
      name: "Ք ք",
      sound: "./sound/Q_q.mp3",
      vowel: "consonant"
    },
    {
      name: "ԵՎ և",
      sound: "./sound/Ev-Eva.mp3",
      vowel: "set"
    },
    {
      name: "Օ օ",
      sound: "./sound/O_o.mp3",
      vowel: "vowel"
    },
    {
      name: "Ֆ ֆ",
      sound: "./sound/F_f.mp3",
      vowel: "consonant"
    },
  ]


  title.textContent = "ԱՅԲՈՒԲԵՆ";

  title.classList.add('title');
  board.classList.add('board');
  images.classList.add('img')

  for(let el of ibuben) {
    div = document.createElement('div');
    btn = document.createElement("button");
    btn.classList.add("btn");
  
    audio = new Audio();
    
    for (let i = 1; i <= 39; i++) {
      btn.textContent = el.name;
      btn.addEventListener('click', (e) => {
        audio.src = el.sound;
        audio.volume = .6;
        if(e.target.textContent === el.name){
          if(el.vowel === "vowel") {
            e.target.classList.add('vowel');
          }else if(el.vowel === "set") {
            e.target.classList.add('set');
          }else{
            e.target.classList.add('consonant');
          }
        }  
       audio.play()
      })
    }
    board.append(btn);
  }

  root.append(title, board, images)
})()