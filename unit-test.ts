// helpers/time-formatter.ts
// Fungsi yang perlu dibuat unit test nya
export default function timeFormatter(totalSecond: number) {
    const second = ((totalSecond % 3600) % 60).toFixed(0)
    const minute = Math.floor((totalSecond % 3600) / 60)
    const hour = Math.floor(totalSecond / 3600)
  
    const textHour = hour === 0 ? '' : `${hour}:`
    const textMinute = minute.toString().length === 1 ? `0${minute.toString()}` : minute
    const textSecond = second.toString().length === 1 ? `0${second.toString()}` : second
  
    return `${textHour}${textMinute}:${textSecond}`
  }
  
  // helpers/__tests__/time-formatter.test.ts
  // File unit test nya
  import timeFormatter from '../time-formatter'
  
  describe('timeFormatter', () => {
    it('should return correct time format', () => {
      const timeinSecArr = [3600, 60, 0, 1, 7260, 1235]
      const convertTimeinSec = timeinSecArr.map((item) => timeFormatter(item))
      expect(convertTimeinSec).toEqual([
        '1:00:00',
        '01:00',
        '00:00',
        '00:01',
        '2:01:00',
        '20:35',
      ])
    })
  })
  