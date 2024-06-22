const questions = [
    {
        question:
            "1. Does your child avoid looking at you in the eye when communicating? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "2. Does your child rarely smile at you or other family members? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "3. Does your child tend to be very detached instead of being actively involved with family activities?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "4. Does your child make little to no effort to reach out and connect with others in the family? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "5. Does your child have difficulty relating to or having meaningful interactions with other people? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "6. Is your child unable to pick up on social cues or family norms and expectations?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question: "7. Does your child mostly play alone in a repetitive manner?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "8. Is your child unable to engage in activities by taking appropriate turns with others in the family?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "9.  Does your child seem to make temporary social connections and lack the ability to maintain long-term peer relationships?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "10. Does your child have emotional reactions that don’t match the situation? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "11. Does your child often have emotions that seem exaggerated compared to the situation?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "12. Does your child repeat and indulge in the same emotional states repeatedly without any context?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "13. Does your child seem to lack a sense of fear or danger in situations where others would?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "14. Does your child get excited or hyperactive at times when there is no clear reason?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "15. Did your child have speech for some time and then lose the ability to speak? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "16. Does your child have difficulty using gestures, facial expressions and body language to communicate? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question: "17. Does your child repeat certain phrases over and over?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "18. Does your child repeat words you or others say like an echo?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "19. Does your child make unusual sounds like squeals or noises instead of words at times?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question: "20. Is your child unable to start or carry on a conversation?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "21. Does your child use made-up words or nonsense words at times? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "22. Does your child switch “I” and “you” frequently when talking?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "23. Is your child unable to grasp the real meaning during communication?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "24. Does your child engage in repetitive movements like flapping arms or walking on tiptoes? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "25. Does your child form strong attachments to unusual objects like keys, fans etc? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question: "26. Is your child excessively overactive and restless?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "27. Does your child act aggressively at times by hitting, kicking or biting?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question: "28. Does your child have intense temper tantrums? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "29. Does your child sometimes hurt him/herself by actions like banging head?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "30. Does your child insist strongly on sticking to fixed routines and get very upset if changed?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "31. Is your child oversensitive or undersensitive to sounds, touch, taste, light etc?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "32. Does your child stare blankly into space for long periods of time? ",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "33. Does your child have difficulty tracking moving objects smoothly?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "34. Does your child react strangely to normal sights or report seeing things others don’t?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question: "35. Is your child insensitive to pain from injuries?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "36. Does your child explore objects mainly by smells, touching, tasting instead of looking?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
    {
        question:
            "37. Is your child’s attention and concentration inconsistent and wavering?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "38. Does your child take longer than expected to respond when spoken to?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "39. Does your child display exceptionally sharp memory in some specific areas despite other difficulties?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },

    {
        question:
            "40. Does your child display special talents or abilities in a particular skill area despite other difficulties?",
        options: [
            { text: "Rarely", score: 1 },
            { text: "Sometimes", score: 2 },
            { text: "Frequently", score: 3 },
            { text: "Mostly", score: 4 },
            { text: "Always", score: 5 },
        ],
    },
];



export default questions