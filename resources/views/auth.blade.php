<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Halaman' }}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        // Toggle menu di mobile
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }
    </script>
</head>

<body class="bg-gray-100 min-h-screen">
    {{-- Navbar --}}
    <nav class="bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                {{-- Logo dan Menu Kiri --}}
                <div class="flex items-center space-x-6">
                    <a href="{{ route('artikels') }}" class="text-lg font-semibold text-blue-600 hover:text-blue-700">
                        SkinPathoScan
                    </a>
                    <div class="hidden sm:flex space-x-4">
                        {{-- <a href="{{ route('dashboard') }}" class="text-gray-700 hover:text-blue-500">Dashboard</a> --}}
                        <a href="{{ route('artikels') }}"
                            class="text-gray-700 hover:text-blue-500 bg-white hover:bg-gray-200 px-3 py-1 rounded-md transform hover:scale-[0.98] transition duration-150">
                            Artikel
                        </a>
                        {{-- <a href="{{ route('projeks.index') }}" class="text-gray-700 hover:text-blue-500">Projek</a>
                        <a href="{{ route('artikels.index') }}" class="text-gray-700 hover:text-blue-500">Artikel</a> --}}
                    </div>
                </div>

                {{-- User & Logout --}}
                <div class="hidden sm:flex items-center space-x-4">
                    <span class="text-sm text-gray-700">{{ Auth::user()->name }}</span>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button class="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded transition">
                            Logout
                        </button>
                    </form>
                </div>

                {{-- Hamburger Button --}}
                <div class="sm:hidden flex items-center">
                    <button onclick="toggleMobileMenu()" class="text-gray-600 hover:text-gray-800 focus:outline-none">
                        <!-- Icon titik tiga -->
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        {{-- Mobile Menu --}}
        <div id="mobile-menu" class="sm:hidden hidden px-4 pb-4">
            <div class="space-y-2 mt-2">
                {{-- <a href="{{ route('dashboard') }}" class="block text-gray-700 hover:text-blue-500">Dashboard</a> --}}
                <a href="{{ route('artikels') }}"
                    class="text-gray-700 hover:text-blue-500 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md transform hover:scale-[0.98] transition duration-150">
                    Artikel
                </a>

                {{-- <a href="{{ route('projeks.index') }}" class="block text-gray-700 hover:text-blue-500">Projek</a>
                <a href="{{ route('artikels.index') }}" class="block text-gray-700 hover:text-blue-500">Artikel</a> --}}
            </div>
            <div class="border-t border-gray-200 mt-3 pt-3">
                <div class="text-sm text-gray-700 mb-2">{{ Auth::user()->name }}</div>
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button
                        class="w-full text-left bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition">
                        Logout
                    </button>
                </form>
            </div>
        </div>
    </nav>

    {{-- Konten Halaman --}}
    <main class="p-6">
        @yield('content')
    </main>
</body>

</html>
