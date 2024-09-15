function confirmNavigation(event) {
    // Menampilkan pesan konfirmasi kepada pengguna
    const userConfirmed = confirm('Apakah Anda yakin ingin melanjutkan ke halaman ini?');
    
    // Jika pengguna tidak mengonfirmasi, batalkan aksi
    if (!userConfirmed) {
        event.preventDefault(); // Mencegah link berfungsi jika pengguna menekan "Cancel"
    }
}

